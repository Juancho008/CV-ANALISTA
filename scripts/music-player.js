'use strict';

const SPOTIFY_PLAYLIST = {
    id: '0XXtViuvCuVVgHSz8jJP7g',
    title: 'CV',
    artist: 'Juan Ignacio Espindola',
    url: 'https://open.spotify.com/playlist/0XXtViuvCuVVgHSz8jJP7g',
    embedUrl: 'https://open.spotify.com/embed/playlist/0XXtViuvCuVVgHSz8jJP7g?utm_source=generator&theme=0'
};

const CONSENT_KEY = 'cv-spotify-consent';

function initMusicPlayer() {
    const player = document.querySelector('[data-spotify-player]');
    const titleEl = document.querySelector('[data-music-title]');
    const artistEl = document.querySelector('[data-music-artist]');
    const collapseBtn = document.querySelector('[data-music-collapse]');
    const openBtn = document.querySelector('[data-music-open]');
    const iframe = document.querySelector('[data-spotify-iframe]');
    const placeholder = document.querySelector('[data-spotify-placeholder]');
    const embedWrap = document.querySelector('[data-spotify-embed-wrap]');
    const modal = document.querySelector('[data-music-consent-modal]');
    const acceptBtn = document.querySelector('[data-music-consent-accept]');
    const declineBtn = document.querySelector('[data-music-consent-decline]');
    const overlay = document.querySelector('[data-music-consent-overlay]');

    if (!player) return;

    if (titleEl) titleEl.textContent = SPOTIFY_PLAYLIST.title;
    if (artistEl) artistEl.textContent = SPOTIFY_PLAYLIST.artist;
    if (openBtn) openBtn.href = SPOTIFY_PLAYLIST.url;

    function openPlayer() {
        player.classList.remove('is-collapsed');
        if (collapseBtn) {
            collapseBtn.setAttribute('aria-expanded', 'true');
            updateCollapseLabel(false);
        }
    }

    function collapsePlayer() {
        player.classList.add('is-collapsed');
        if (collapseBtn) {
            collapseBtn.setAttribute('aria-expanded', 'false');
            updateCollapseLabel(true);
        }
    }

    function updateCollapseLabel(collapsed) {
        if (!collapseBtn) return;
        const isCompact = window.matchMedia('(max-width: 1440px)').matches;
        if (isCompact) {
            collapseBtn.setAttribute('aria-label', collapsed ? 'Expand music player' : 'Minimize music player');
        } else {
            collapseBtn.setAttribute('aria-label', collapsed ? 'Expand player' : 'Minimize player');
        }
    }

    function loadSpotifyEmbed() {
        if (!iframe || iframe.src) return;

        iframe.src = SPOTIFY_PLAYLIST.embedUrl;
        if (embedWrap) embedWrap.classList.add('is-loaded');
        if (placeholder) placeholder.hidden = true;

        collapsePlayer();
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
        document.body.classList.remove('music-consent-open');
    }

    function showModal() {
        if (!modal) return;
        modal.classList.add('active');
        document.body.classList.add('music-consent-open');
    }

    function acceptMusic() {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        closeModal();
        loadSpotifyEmbed();
    }

    function declineMusic() {
        localStorage.setItem(CONSENT_KEY, 'declined');
        closeModal();
        player.classList.add('is-declined');
    }

    if (acceptBtn) acceptBtn.addEventListener('click', acceptMusic);
    if (declineBtn) declineBtn.addEventListener('click', declineMusic);
    if (overlay) overlay.addEventListener('click', declineMusic);

    if (collapseBtn) {
        collapseBtn.addEventListener('click', function () {
            const collapsed = player.classList.toggle('is-collapsed');
            collapseBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
            updateCollapseLabel(collapsed);
        });
        updateCollapseLabel(player.classList.contains('is-collapsed'));
    }

    if (placeholder) {
        placeholder.addEventListener('click', function () {
            if (localStorage.getItem(CONSENT_KEY) === 'declined') {
                showModal();
            }
        });
    }

    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === 'accepted') {
        if (iframe && !iframe.src) {
            iframe.src = SPOTIFY_PLAYLIST.embedUrl;
            if (embedWrap) embedWrap.classList.add('is-loaded');
            if (placeholder) placeholder.hidden = true;
        }
        collapsePlayer();
    } else if (savedConsent === 'declined') {
        player.classList.add('is-declined');
    } else {
        window.setTimeout(showModal, 600);
    }
}

initMusicPlayer();
