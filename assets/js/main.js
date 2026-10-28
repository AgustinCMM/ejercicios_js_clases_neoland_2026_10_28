const STORAGE_KEY = 'clases-js-avanzado-bloque2-progress-v1';
const EXERCISE_IDS = Array.from({ length: 20 }, (_, index) => String(index + 21));
const DEFAULT_PROGRESS = Object.fromEntries(EXERCISE_IDS.map((id) => [id, 'pending']));
let progress = { ...DEFAULT_PROGRESS };
let storageAvailable = true;

function setNotice(message) {
  const notice = document.querySelector('[data-progress-notice]');
  if (notice) {
    notice.textContent = message;
  }
}

function isValidProgress(value) {
  if (!value || typeof value !== 'object' || value.version !== 1) {
    return false;
  }

  const states = value.exercises;
  if (!states || typeof states !== 'object' || Array.isArray(states)) {
    return false;
  }

  const keys = Object.keys(states).sort();
  const expectedKeys = [...EXERCISE_IDS].sort();
  if (keys.length !== expectedKeys.length || keys.some((key, index) => key !== expectedKeys[index])) {
    return false;
  }

  return EXERCISE_IDS.every((id) => states[id] === 'pending' || states[id] === 'resolved');
}

function readProgress() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === null) {
      return { ...DEFAULT_PROGRESS };
    }

    const parsed = JSON.parse(saved);
    if (!isValidProgress(parsed)) {
      setNotice('El progreso guardado no tiene un formato válido. Se mostrarán todos los ejercicios como pendientes.');
      return { ...DEFAULT_PROGRESS };
    }

    return { ...parsed.exercises };
  } catch {
    storageAvailable = false;
    setNotice('El almacenamiento local no está disponible. Los cambios solo se conservarán mientras esta página siga abierta.');
    return { ...DEFAULT_PROGRESS };
  }
}

function saveProgress() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      updatedAt: new Date().toISOString(),
      exercises: progress,
    }));
    storageAvailable = true;
    return true;
  } catch {
    storageAvailable = false;
    setNotice('El almacenamiento local no está disponible. Los cambios solo se conservarán mientras esta página siga abierta.');
    return false;
  }
}

function renderProgress() {
  document.querySelectorAll('[data-progress-id]').forEach((element) => {
    const id = element.dataset.progressId;
    const resolved = progress[id] === 'resolved';
    const badge = element.matches('[data-progress-badge]')
      ? element
      : element.querySelector('[data-progress-badge]');

    if (badge) {
      badge.textContent = resolved ? 'Resuelto' : 'Pendiente';
      badge.dataset.status = resolved ? 'resolved' : 'pending';
    }

    const checkbox = element.matches('[data-progress-checkbox]')
      ? element
      : element.querySelector('[data-progress-checkbox]');
    if (checkbox) {
      checkbox.checked = resolved;
    }
  });

  document.querySelectorAll('[data-progress-checkbox]').forEach((checkbox) => {
    checkbox.checked = progress[checkbox.dataset.progressCheckbox] === 'resolved';
  });
}

function setExerciseProgress(id, resolved) {
  if (!EXERCISE_IDS.includes(id)) {
    return;
  }

  progress[id] = resolved ? 'resolved' : 'pending';
  saveProgress();
  renderProgress();
}

function exportProgress() {
  const fileContents = JSON.stringify({
    version: 1,
    updatedAt: new Date().toISOString(),
    exercises: progress,
  }, null, 2);
  const file = new Blob([fileContents], { type: 'application/json' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'progreso-clases-js.json';
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  setNotice(storageAvailable
    ? 'Se descargó una copia JSON del progreso actual.'
    : 'Se descargó el progreso temporal de esta sesión.');
}

async function importProgress(file) {
  if (!file) {
    return;
  }

  try {
    const parsed = JSON.parse(await file.text());
    if (!isValidProgress(parsed)) {
      setNotice('El archivo no es válido. Debe contener los 20 ejercicios con estados pendiente o resuelto; no se cambió el progreso.');
      return;
    }

    progress = { ...parsed.exercises };
    const saved = saveProgress();
    renderProgress();
    setNotice(saved
      ? 'Progreso importado y guardado en este navegador.'
      : 'Progreso importado para esta sesión, pero el almacenamiento local no está disponible.');
  } catch {
    setNotice('No se pudo leer el archivo JSON. El progreso actual no se modificó.');
  }
}

progress = readProgress();
renderProgress();

if (!storageAvailable) {
  setNotice('El almacenamiento local no está disponible. Los cambios solo se conservarán mientras esta página siga abierta.');
}

document.querySelectorAll('[data-progress-checkbox]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    setExerciseProgress(checkbox.dataset.progressCheckbox, checkbox.checked);
  });
});

document.querySelector('[data-export-progress]')?.addEventListener('click', exportProgress);

document.querySelector('[data-import-progress-button]')?.addEventListener('click', () => {
  document.querySelector('[data-import-progress-file]')?.click();
});

document.querySelector('[data-import-progress-file]')?.addEventListener('change', (event) => {
  const input = event.currentTarget;
  importProgress(input.files?.[0]);
  input.value = '';
});
