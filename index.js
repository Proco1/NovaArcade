
const GAMES = [
  {
    id: 'space-waves',
    title: 'Space Waves',
    description: 'A high-octane rhythmic avoidance game. Navigate through geometric obstacles with precise timing and skill to survive the space waves.',
    thumbnail: 'https://thaka.bing.com/th?id=OCGE.9nm5764dbppg_v9_main_webp&w=124&h=124&qlt=80&c=0&rs=1',
    url: 'https://crazygames.cdn.msnfun.com/9nm5764dbppg/v8/index.html?msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIzQkZFRjc1OTE2NDU2NjI3MjhCM0UxOTAxNzFENjcyRCIsImxvY2FsZSI6ImVuLWdiIiwiZW50cnlQb2ludElkIjoiIiwic3dpdGNoR2FtZVBheWxvYWQiOnsic3dpdGNoZWRUbyI6IjlubTU3NjRkYnBwZyIsInZhbHVlIjp7fX19',
    category: 'Skill',
    rating: 4.9,
    plays: '2.5M+',
    isFeatured: true
  },
  {
    id: '2v2-io',
    title: '2v2.io',
    description: 'Fast-paced multiplayer action. Build, shoot, and compete in intense 2v2 battles. Prove your dominance in this unblocked competitive arena.',
    thumbnail: 'https://thaka.bing.com/th?id=OCGE.9p4q82w7cd1f_abtesting_7c126d39-ef59-416e-bb7b-c7b7b240a802_webp&w=124&h=124&qlt=80&c=0&rs=1',
    url: 'https://2v2.io/?msn=true&msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIzQkZFRjc1OTE2NDU2NjI3MjhCM0UxOTAxNzFENjcyRCIsImxvY2FsZSI6ImVuLWdiIiwiZW50cnlQb2ludElkIjoiIiwic3dpdGNoR2FtZVBheWxvYWQiOnsic3dpdGNoZWRUbyI6IjlwNHE4Mnc3Y2QxZiIsInZhbHVlIjp7fX19',
    category: 'Action',
    rating: 4.7,
    plays: '850K+',
    isFeatured: false
  },
  {
    id: 'pixel-path',
    title: 'Pixel Path',
    description: 'A challenging puzzle game where you must find the perfect path through pixelated worlds. Test your logic and spatial awareness in this beautiful indie title.',
    thumbnail: 'https://geometry-games.io/data/image/game/pixel-path/pixel-path.png',
    url: '//html5.gamedistribution.com/rvvASMiM/3ffc5c0944f54f06afb212ca7d80bb00/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.onlinegames.io%2Fpixel-path%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5vbmxpbmVnYW1lcy5pby9waXhlbC1wYXRoLyIsInBhcmVudERvbWFpbiI6Im9ubGluZWdhbWVzLmlvIiwidG9wRG9tYWluIjoib25saW5lZ2FtZXMuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    category: 'Puzzle',
    rating: 4.5,
    plays: '320K+',
    isFeatured: false
  }
];

// DOM Elements
const homeView = document.getElementById('home-view');
const gameView = document.getElementById('game-view');
const iframeContainer = document.getElementById('iframe-container');
const allGamesSection = document.getElementById('all-games-section');

// Initialization
function init() {
    renderGames();
    
    // Navigation branding
    document.getElementById('nav-brand').addEventListener('click', backToHome);
    document.getElementById('nav-browse').addEventListener('click', backToHome);
    document.getElementById('back-btn').addEventListener('click', backToHome);

    // Hero buttons
    const heroPlayBtn = document.getElementById('play-featured-btn');
    if (heroPlayBtn) {
        heroPlayBtn.addEventListener('click', () => {
            playGame('space-waves');
        });
    }

    // Fullscreen Support
    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        const iframe = document.getElementById('iframe');
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
    });
}

function renderGames() {
    // Refresh the arcade section
    allGamesSection.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-slate-100">Browse Arcade</h2>
            <span id="game-count" class="text-slate-500 text-xs font-medium uppercase tracking-widest">${GAMES.length} ${GAMES.length === 1 ? 'Game' : 'Games'} Available</span>
        </div>
        <div id="category-container" class="space-y-12"></div>
    `;

    const categoryContainer = document.getElementById('category-container');
    const categories = [...new Set(GAMES.map(g => g.category))];

    categories.forEach(cat => {
        const catGames = GAMES.filter(g => g.category === cat);
        const sectionHtml = `
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-1 h-5 bg-indigo-500 rounded-full"></div>
                    <h3 class="text-lg font-bold text-slate-200">${cat} Games</h3>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
                    ${catGames.map(game => createGameCard(game)).join('')}
                </div>
            </div>
        `;
        categoryContainer.innerHTML += sectionHtml;
    });
}

function createGameCard(game) {
    return `
        <div class="game-card group relative flex flex-col bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-indigo-500/10 fade-in" onclick="window.playGame('${game.id}')">
            <div class="relative aspect-square overflow-hidden">
                <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-full object-cover transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="play-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>

                <div class="absolute top-2 right-2 px-1.5 py-0.5 bg-slate-950/60 backdrop-blur-md rounded-md text-[8px] font-bold flex items-center gap-0.5 border border-white/10">
                    <span class="text-yellow-400">★</span> ${game.rating}
                </div>
            </div>
            <div class="p-3 text-center">
                <h3 class="font-bold text-[10px] sm:text-xs text-slate-100 group-hover:text-indigo-400 transition-colors truncate">${game.title}</h3>
                <p class="text-[8px] text-slate-500 mt-0.5">${game.plays}</p>
            </div>
        </div>
    `;
}

// Global scope for onclick handlers
window.playGame = function(id) {
    const game = GAMES.find(g => g.id === id);
    if (!game) return;

    // Update Player View UI
    document.getElementById('player-title').innerHTML = `
        ${game.title}
        <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/20 font-bold uppercase tracking-widest ml-2">${game.category}</span>
    `;
    document.getElementById('player-description').textContent = game.description;

    // Load Game Iframe
    let iframeHtml = `
        <iframe 
            id="iframe" 
            role="none" 
            sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-forms allow-top-navigation" 
            aria-hidden="true" 
            style="position: absolute; width: 100%; height: 100%; border: none;"
            src="${game.url}">
        </iframe>`;

    // Special handling for Pixel Path's provider
    if (game.id === 'pixel-path') {
        iframeHtml = `
            <iframe 
                id="iframe" 
                frameborder="0" 
                allow="autoplay" 
                allowfullscreen="" 
                seamless="" 
                scrolling="no" 
                style="position: absolute; width: 100%; height: 100%; border: none;"
                src="${game.url}">
            </iframe>`;
    }
    
    iframeContainer.innerHTML = iframeHtml;

    // Navigation
    homeView.classList.add('hidden');
    gameView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function backToHome() {
    iframeContainer.innerHTML = '';
    gameView.classList.add('hidden');
    homeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Kickoff
document.addEventListener('DOMContentLoaded', init);
