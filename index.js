const GAMES = [
  {
    id: 'slope',
    title: 'Slope',
    description: 'The ultimate endless runner. Steer a ball down a steep, narrow slope, avoiding red obstacles and staying on the track as your speed increases to breakneck levels. One wrong move and it\'s game over!',
    thumbnail: 'https://slopegame-online.com/slope.webp',
    url: 'https://yoplay.io/slope.embed',
    category: 'Skill',
    rating: 4.9,
    plays: '15M+',
    isFeatured: false
  },
  {
    id: 'only-up',
    title: 'Only Up',
    description: 'Scale breathtaking heights in this intense parkour challenge. One mistake could send you back to the beginning. Navigate through a surreal landscape of floating objects and reach the peak in this ultimate test of patience and precision.',
    thumbnail: 'https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/4/e4afe05d247f71b465d82cad7b338dd60346b7c2.jpeg',
    url: 'https://html5.gamedistribution.com/c7a11f86eeda4a2b88e8d5ad2ba2f41d/?gd_sdk_referrer_url=https://www.onlinegames.io/only-up-parkour',
    category: 'Action',
    rating: 4.8,
    plays: '2.4M+',
    isFeatured: false
  },
  {
    id: 'bloxorz',
    title: 'Bloxorz',
    description: 'The ultimate test of logic and spatial orientation. Maneuver a 2-by-1 block through a series of challenging 3D levels to reach the target hole. Don\'t fall off the edges!',
    thumbnail: 'https://www.coolmathgames.com/sites/default/files/bloxorz-game-icon.png',
    url: 'https://cloud.onlinegames.io/games/2024/gm/games4/bloxorz/index.html',
    category: 'Puzzle',
    rating: 4.9,
    plays: '5M+',
    isFeatured: false
  },
  {
    id: 'pill-soccer',
    title: 'Pill Soccer',
    description: 'Hilarious head-to-head soccer action with pill-shaped players. Use unique abilities and master the physics to score spectacular goals in this fun sports arcade game.',
    thumbnail: 'https://play-lh.googleusercontent.com/yRgY2xjFr2tTNA8wuB5XEXrYF11Ovypa4EAeM9QBGLJZVjRG3nwgTczZ-hp9HoakcA',
    url: 'https://cloud.onlinegames.io/games/2024/gm/games3/pill-soccer/index.html',
    category: 'Sports',
    rating: 4.8,
    plays: '420K+',
    isFeatured: false
  },
  {
    id: 'tap-tap-shots',
    title: 'Tap-Tap Shots',
    description: 'The ultimate basketball tap-challenge. Keep the ball in the air and sink as many baskets as you can before the timer runs out. Simple to play, hard to master!',
    thumbnail: 'https://imgs.crazygames.com/games/tap-tap-shots/cover_1x1-1732719841511.png?format=auto&quality=100&metadata=none&width=1200',
    url: 'https://www.onlinegames.io/games/2023/q/1/tap-tap-shots/index.html',
    category: 'Sports',
    rating: 4.7,
    plays: '850K+',
    isFeatured: false
  },
  {
    id: 'fnaf-4',
    title: 'FNAF 4',
    description: 'The fourth chapter of the Five Nights at Freddy\'s story. This time, the terror has followed you home. In this final chapter of the original story, you must once again defend yourself against Freddy Fazbear, Chica, Bonnie, Foxy, and even worse things that lurk in the shadows.',
    thumbnail: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/6/6c/Fnaf_4_desktop_icon.jpg/revision/latest?cb=20150723014651',
    url: 'https://cdn.now.gg/html5-games/com.nowgg.h5.pub501.app51770/five-nights-at-freddy-s-4/index.html',
    category: 'Horror',
    rating: 4.9,
    plays: '2.1M+',
    isFeatured: false
  },
  {
    id: 'table-tennis',
    title: 'Table Tennis',
    description: 'A thrilling sports game where you compete in table tennis matches against various opponents from around the world. Master your swing, use spin to your advantage, and rise through the ranks to become the ultimate champion.',
    thumbnail: 'https://imgs.crazygames.com/table-tennis-world-tour_1x1/20230908041108/table-tennis-world-tour_1x1-cover?format=auto&quality=100&metadata=none&width=1200',
    url: 'https://games.crazygames.com/en_US/table-tennis-world-tour/index.html?v=1.350',
    category: 'Sports',
    rating: 4.7,
    plays: '1.5M+',
    isFeatured: false
  },
  {
    id: 'suika-game',
    title: 'Suika Game',
    description: 'The viral watermelon merging challenge. Drop fruits and combine them to reach the ultimate goal: the Suika! Strategic positioning and physics management are key in this addictive puzzle experience.',
    thumbnail: 'https://watermelongame.co.uk/wp-content/uploads/2025/12/suika-game.webp',
    url: 'https://cloud.onlinegames.io/games/2025/construct/321/watermelon-game/index-og.html',
    category: 'Puzzle',
    rating: 4.8,
    plays: '500K+',
    isFeatured: false
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. This unblocked classic lets you mine, craft, and survive in a vast voxel world.',
    thumbnail: 'https://i.redd.it/variations-to-the-minecraft-logo-v0-0dzqovtefeqd1.png?width=1218&format=png&auto=webp&s=4e7beefe76053942332e5c9f4c4f71671f97e63e',
    url: 'https://sd592g.github.io/zj684od4lfg/',
    category: 'Adventure',
    rating: 4.9,
    plays: '20M+',
    isFeatured: false
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    description: 'Jump and fly your way through danger in this rhythm-based action platformer! Push your skills to the limit as you jump, fly and flip your way through dangerous passages and spiky obstacles.',
    thumbnail: 'https://static.wikia.nocookie.net/b213ondiscord/images/a/a6/Geometrydash.png/revision/latest/thumbnail/width/360/height/450?cb=20200721125515',
    url: 'https://ozgames.io/geometry-dash.embed',
    category: 'Skill',
    rating: 4.8,
    plays: '12M+',
    isFeatured: false
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    description: 'The perfect game for the armchair quarterback to finally prove a point. Can you manage your team, handle the media, and lead your squad to the ultimate prize?',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/ee9ca3764ef4289a48a1ebf457ef605441ed1f35a0f2eb12707a70d609e53686/retro-bowl.png',
    url: 'https://retrobowl.me/iframe/retro-bowl/latest.html',
    category: 'Sports',
    rating: 4.9,
    plays: '10M+',
    isFeatured: false
  },
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
    id: 'snow-rider-3d',
    title: 'Snow Rider 3d',
    description: 'Experience the ultimate downhill sledding adventure. Navigate through snowy mountains, dodge obstacles, and collect gifts in this immersive 3D action game.',
    thumbnail: 'https://geometrydashfullversion.io/data/image/game/snow-rider-3d/snow-rider-3d.jpg',
    url: 'https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://www.onlinegames.io/snow-rider-3d',
    category: 'Action',
    rating: 4.8,
    plays: '4.5M+',
    isFeatured: false
  },
  {
    id: 'bloxd-io',
    title: 'Bloxd.io',
    description: 'A massive online sandbox featuring Minecraft-style graphics and multiple game modes. Experience survival, creative building, parkour, and competitive combat in this versatile browser adventure.',
    thumbnail: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coad0h.webp',
    url: 'https://bloxd.io/',
    category: 'Adventure',
    rating: 4.8,
    plays: '15M+',
    isFeatured: false
  },
  {
    id: 'deadshot-io',
    title: 'DEADSHOT.io',
    description: 'A competitive first-person shooter with fast-paced gameplay and multiple maps. Master your aim and reflexes in this intense multiplayer arena.',
    thumbnail: 'https://www.onlinegames.io/media/posts/898/Deadshot-io.jpg',
    url: 'https://deadshot.io/',
    category: 'Shooter',
    rating: 4.8,
    plays: '1.2M+',
    isFeatured: false
  },
  {
    id: 'world-guessr',
    title: 'WorldGuessr',
    description: 'Embark on a global adventure and test your geography skills. You are dropped in a random location in Street View—can you figure out where you are?',
    thumbnail: 'https://imgs.crazygames.com/worldguessr_1x1/20241018082521/worldguessr_1x1-cover?format=auto&quality=100&metadata=none&width=1200',
    url: 'https://www.google.com/maps/embed/v1/streetview?location=40.6909253,-74.0552998&key=AIzaSyA_t5gb2Mn37dZjhsaJ4F-OPp1PWDxqZyI&fov=100&language=en',
    category: 'Adventure',
    rating: 4.7,
    plays: '890K+',
    isFeatured: false
  },
  {
    id: 'fnaf-2',
    title: 'FNAF 2',
    description: 'Welcome back to the new and improved Freddy Fazbear\'s Pizza! In Five Nights at Freddy\'s 2, the old and aging animatronics are joined by a new cast of characters. They are kid-friendly, updated with the latest in facial recognition technology, and promised to put on a safe and entertaining show for kids and grown-ups alike. What could go wrong?',
    thumbnail: 'https://howlongtobeat.com/games/22612_Five_Nights_at_Freddys_2.jpg',
    url: 'https://www.onlinegames.io/games/2024/w1/five-nights-at-freddys-2/index.html',
    category: 'Horror',
    rating: 4.9,
    plays: '3.2M+',
    isFeatured: false
  },
  {
    id: '2v2-io',
    title: '2v2.io',
    description: 'Fast-paced multiplayer action. Build, shoot, and compete in intense 2v2 battles. Prove your dominance in this unblocked competitive arena.',
    thumbnail: 'https://thaka.bing.com/th?id=OCGE.9p4q82w7cd1f_abtesting_7c126d39-ef59-416e-bb7b-c7b7b240a802_webp&w=124&h=124&qlt=80&c=0&rs=1',
    url: 'https://2v2.io/?msn=true&msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIzQkZFRjc1OTE2NDU2NjI3MjhCM0UxOTAxNzFENjcyRCIsImxvY2FsZSI6ImVuLWdiIiwiZW50cnlQb2ludElkIjoiIiwic3dpdGNoR2FtZVBheWxvYWQiOnsic3dpdGNoZWRUbyI6IjlwNHE4Mnc3Y2QxZiIsInZhbHVlIjp7fX19',
    category: 'Shooter',
    rating: 4.7,
    plays: '850K+',
    isFeatured: false
  },
  {
    id: 'veck-io',
    title: 'Veck.io',
    description: 'A fast-paced neon shooter where you pilot a ship through waves of enemies. Upgrade your weapons and survive as long as possible in this intense arena.',
    thumbnail: 'https://geometrylitegame.org//data/image/game/veck-io.jpg',
    url: 'https://veck.io/?cg=true&auto_play=true',
    category: 'Shooter',
    rating: 4.8,
    plays: '420K+',
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
  },
  {
    id: 'rooftop-run',
    title: 'Rooftop Run',
    description: 'Jump, slide and sprint across skyscrapers in this adrenaline-fueled parkour adventure. Master the urban landscape and reach the finish line in record time.',
    thumbnail: 'https://imgs.crazygames.com/rooftop-run_1x1/20240415041518/rooftop-run_1x1-cover?format=auto&quality=100&metadata=none&width=1200',
    url: '//html5.gamedistribution.com/rvvASMiM/cee36dd2c4f34d5797921a49bb1d4b83/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.onlinegames.io%2Frooftop-run%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5vbmxpbmVnYW1lcy5pby9yb29mdG9wLXJ1bi8iLCJwYXJlbnREb21haW4iOiJvbmxpbmVnYW1lcy5pbyIsInRvcERvbWFpbiI6Im9ubGluZWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodW1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D',
    category: 'Action',
    rating: 4.8,
    plays: '1.1M+',
    isFeatured: false
  },
  {
    id: 'fnaf',
    title: 'FNAF',
    description: 'Survive five nights at Freddy Fazbear\'s Pizza. Monitor the security cameras and manage your power carefully to avoid the animatronics in this cult classic horror experience.',
    thumbnail: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA18362_00/1/i_cd6a177c374f229f9cd8e1164a78d49f78af97820747d480daf8cdd3e965c248/i/icon0.png',
    url: 'https://www.onlinegames.io/games/2024/w1/five-nights-at-freddys/index.html',
    category: 'Horror',
    rating: 4.9,
    plays: '5M+',
    isFeatured: false
  },
  {
    id: 'fragen',
    title: 'Fragen',
    description: 'Test your knowledge and challenge your brain with Fragen. A fun and engaging quiz game designed to keep you on your toes with a variety of interesting questions.',
    thumbnail: 'https://www.onlinegames.io/media/posts/1040/fragen-game.webp',
    url: 'https://html5.gamedistribution.com/626030ce36a249729e19df483d7836dc/?gd_sdk_referrer_url=https://www.onlinegames.io/fragen/',
    category: 'Shooter',
    rating: 4.6,
    plays: '150K+',
    isFeatured: false
  }
];

// DOM Elements
const homeView = document.getElementById('home-view');
const gameView = document.getElementById('game-view');
const iframeContainer = document.getElementById('iframe-container');
const allGamesSection = document.getElementById('all-games-section');

// Modal Elements
const requestModal = document.getElementById('request-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const openModalBtn = document.getElementById('open-request-modal');
const closeModalBtn = document.getElementById('close-modal');
const requestForm = document.getElementById('request-form');
const requestSuccess = document.getElementById('request-success');
const successDoneBtn = document.getElementById('success-done');

// Detection for Mobile Devices
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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

    // Fullscreen Support with optimized Mobile Handling
    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        const container = document.getElementById('iframe-container');
        if (!container) return;

        // On mobile, skip native FS to avoid browser quirks and use Pseudo-Fullscreen exclusively
        if (isMobile) {
            togglePseudoFullscreen(container);
            return;
        }

        // Desktop logic: Try native first
        const requestFS = container.requestFullscreen || 
                          container.webkitRequestFullscreen || 
                          container.mozRequestFullScreen || 
                          container.msRequestFullscreen;

        if (requestFS) {
            requestFS.call(container).catch(() => {
                togglePseudoFullscreen(container);
            });
        } else {
            togglePseudoFullscreen(container);
        }
    });

    // Request Modal Events
    openModalBtn.addEventListener('click', openRequestModal);
    closeModalBtn.addEventListener('click', closeRequestModal);
    modalBackdrop.addEventListener('click', closeRequestModal);
    successDoneBtn.addEventListener('click', closeRequestModal);
    
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('req-name').value;
        const url = document.getElementById('req-url').value;
        
        console.log('Game Request:', { name, url });
        
        // Show success state
        requestForm.classList.add('hidden');
        requestSuccess.classList.remove('hidden');
    });

    // ESC key to close modal or exit pseudo-fullscreen
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRequestModal();
            const container = document.getElementById('iframe-container');
            if (container && container.classList.contains('pseudo-fullscreen')) {
                togglePseudoFullscreen(container);
            }
        }
    });
}

function openRequestModal() {
    requestModal.classList.remove('hidden');
    requestModal.classList.add('flex');
    requestForm.classList.remove('hidden');
    requestSuccess.classList.add('hidden');
    requestForm.reset();
    document.body.style.overflow = 'hidden';
}

function closeRequestModal() {
    requestModal.classList.add('hidden');
    requestModal.classList.remove('flex');
    document.body.style.overflow = '';
}

/**
 * Fallback for mobile devices that don't support native element fullscreen.
 * Uses CSS to make the game container cover the entire viewport.
 */
function togglePseudoFullscreen(container) {
    container.classList.toggle('pseudo-fullscreen');
    const exitBtnId = 'exit-fs-mobile';
    let exitBtn = document.getElementById(exitBtnId);
    
    if (container.classList.contains('pseudo-fullscreen')) {
        if (!exitBtn) {
            exitBtn = document.createElement('button');
            exitBtn.id = exitBtnId;
            // Rounded indigo circle with white X - sized for touch
            exitBtn.className = 'fixed top-6 right-6 z-[10000] w-14 h-14 bg-indigo-600/90 text-white rounded-full font-bold shadow-2xl flex items-center justify-center transition-transform active:scale-90 backdrop-blur-md border border-white/20';
            exitBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>';
            exitBtn.onclick = () => togglePseudoFullscreen(container);
            document.body.appendChild(exitBtn);
        }
        document.body.style.overflow = 'hidden'; // Lock scrolling
    } else {
        if (exitBtn) exitBtn.remove();
        document.body.style.overflow = ''; // Unlock scrolling
    }
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

    // Special handling for HTML5 providers that need full permissions or specific IDs
    const permissiveIds = ['slope', 'only-up', 'bloxorz', 'pill-soccer', 'tap-tap-shots', 'fnaf-4', 'table-tennis', 'suika-game', 'minecraft', 'geometry-dash', 'retro-bowl', 'pixel-path', 'rooftop-run', 'fnaf', 'fnaf-2', 'fragen', 'veck-io', 'deadshot-io', 'world-guessr', 'bloxd-io', 'snow-rider-3d'];
    
    let iframeHtml;
    if (permissiveIds.includes(game.id)) {
        // Broad permissions for modern browser games
        iframeHtml = `
            <iframe 
                id="iframe" 
                frameborder="0" 
                allow="autoplay; fullscreen; pointer-lock; orientation-lock; microphone; clipboard-read; clipboard-write; accelerometer; gyroscope; payment; encrypted-media; picture-in-picture" 
                allowfullscreen="true" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                msallowfullscreen="true"
                seamless="" 
                scrolling="no" 
                sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                style="position: absolute; width: 100%; height: 100%; border: none;"
                src="${game.url}">
            </iframe>`;
    } else {
        // Standard sandboxed iframe
        iframeHtml = `
            <iframe 
                id="iframe" 
                role="none" 
                sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-forms allow-top-navigation" 
                aria-hidden="true" 
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
    // Ensure pseudo-fullscreen is closed when exiting
    const container = document.getElementById('iframe-container');
    if (container && container.classList.contains('pseudo-fullscreen')) {
        togglePseudoFullscreen(container);
    }
    
    iframeContainer.innerHTML = '';
    gameView.classList.add('hidden');
    homeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Kickoff
document.addEventListener('DOMContentLoaded', init);