(() => {
  const frames = [
    { icon: 'assets/logo-evento.svg', signal: 'SIGNAL_01', state: '● LIVE', flag: 'CTI{4CC3S0-D3N3G4D0}' },
    { icon: 'assets/icon-shield.svg', signal: 'SCAN_02', state: '● ACTIVE', flag: 'CTI{3SCUD0-4O4}' },
    { icon: 'assets/icon-lock.svg', signal: 'AUTH_03', state: '● SECURE', flag: 'CTI{CL4V3-1NC0RR3CT4}' },
    { icon: 'assets/icon-terminal.svg', signal: 'TRACE_04', state: '● FOUND', flag: 'CTI{11N0V-S3N4L-4CT1V4}' },
    { icon: 'assets/icon-key.svg', signal: 'NODE_05', state: '● ONLINE', flag: 'CTI{RU14-S1N-S4L1D4}' },
  ];

  const panel = document.querySelector('.hero-art');
  const icon = document.getElementById('signal-icon');
  const name = document.getElementById('signal-name');
  const state = document.getElementById('signal-state');
  const flag = document.getElementById('signal-flag');
  const count = document.getElementById('signal-count');
  const next = document.getElementById('next-signal');
  if (!panel || !icon || !name || !state || !flag || !count || !next) return;

  frames.forEach((frame) => { const image = new Image(); image.src = frame.icon; });

  let index = 0;
  let timer;
  const ROTATION_MS = 5000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function show(nextIndex) {
    index = (nextIndex + frames.length) % frames.length;
    const frame = frames[index];
    panel.classList.remove('signal-enter');
    void panel.offsetWidth;
    icon.src = frame.icon;
    name.textContent = frame.signal;
    state.textContent = frame.state;
    flag.textContent = frame.flag;
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(frames.length).padStart(2, '0')} SEÑALES`;
    if (!reducedMotion.matches) panel.classList.add('signal-enter');
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = undefined;
  }

  function start() {
    stop();
    if (document.hidden) return;
    timer = window.setInterval(() => show(index + 1), ROTATION_MS);
  }

  next.addEventListener('click', () => { show(index + 1); start(); });
  document.addEventListener('visibilitychange', start);
  start();
})();
