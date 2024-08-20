const navbar = document.querySelector('#nav-bar');

const createNavHome = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl bg-gray-950 h-16 mx-auto flex items-center px-4 justify-between">
            <p class=" font-bold text-xl text-gray-400">TodoApp</p>

            <!-- movil -->
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6 text-gray-400 md:hidden cursor-pointer p-4 w-16 h-16 hover:bg-gray-800 rounded-lg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>         
            
            <!-- escritorio -->
            <div class="text-gray-400 hidden md:flex flex-row gap-4">
                <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Login</a>
                <a href="/registro/" class="transition ease-in-out text-white font-bold bg-gray-400 hover:bg-gray-800 py-2 px-4 rounded-lg" >Sing up</a>
            </div>
            
            <!-- menu movil -->
            <div class="bg-gray-500/90 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
                <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Login</a>
                <a href="/registro/" class="transition ease-in-out text-white font-bold bg-gray-400 hover:bg-gray-800 py-2 px-4 rounded-lg" >Sing up</a>
            </div>
        </div>
    `;
};

const createNavSingUp = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl bg-gray-950 h-16 mx-auto flex items-center px-4 justify-between">
            <p class=" font-bold text-xl text-gray-400">TodoApp</p>

            <!-- movil -->
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6 text-gray-400 md:hidden cursor-pointer p-4 w-16 h-16 hover:bg-gray-800 rounded-lg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>         
            
            <!-- escritorio -->
            <div class="text-gray-400 hidden md:flex flex-row gap-4">
                <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Login</a>
            </div>
            
            <!-- menu movil -->
            <div class="bg-gray-500/90 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
                <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Login</a>
            </div>
        </div>
    `;
};

const createNavLogin = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl bg-gray-950 h-16 mx-auto flex items-center px-4 justify-between">
            <p class=" font-bold text-xl text-gray-400">TodoApp</p>

            <!-- movil -->
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6 text-gray-400 md:hidden cursor-pointer p-4 w-16 h-16 hover:bg-gray-800 rounded-lg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>         
            
            <!-- escritorio -->
            <div class="text-gray-400 hidden md:flex flex-row gap-4">
                <a href="/signup/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Registro</a>
            </div>
            
            <!-- menu movil -->
            <div class="bg-gray-500/90 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
                <a href="/singup/" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Registro</a>
            </div>
        </div>
    `;
};

const createNavTodos = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl bg-gray-950 h-16 mx-auto flex items-center px-4 justify-between">
            <p class=" font-bold text-xl text-gray-400">TodoApp</p>

            <!-- movil -->
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="size-6 text-gray-400 md:hidden cursor-pointer p-4 w-16 h-16 hover:bg-gray-800 rounded-lg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>         
            
            <!-- escritorio -->
            <div class="text-gray-400 hidden md:flex flex-row gap-4">
                <button id="close-btn" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Cerrar sesion</button>
            </div>
            
            <!-- menu movil -->
            <div class="bg-gray-500/90 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
                <button id="close-btn" class="transition ease-in-out text-white font-bold hover:bg-gray-800 py-2 px-4 rounded-lg">Cerrar sesion</button>
            </div>
        </div>
    `;
};

if (window.location.pathname === '/') {
    createNavHome();    
} else if (window.location.pathname === '/singup/'){
    createNavSingUp();
} else if (window.location.pathname === '/login/'){
    createNavLogin();
} else if (window.location.pathname === '/todos/'){
    createNavTodos();
}

const navBtn = navbar.children[0].children[1];

navBtn.addEventListener('click', e => {
    const menuMobile = navbar.children[0].children[3];
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = ` 
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /> 
    `;
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');
    } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    `;
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');
    }
});


const closeBtnDesktop = navbar.children[0].children[2].children[0];
const closeBtnMobile = navbar.children[0].children[2].children[0];
closeBtnDesktop.addEventListener('click', async e => {
    
    try {
        await axios.get('api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        
    }
    
});

closeBtnMobile.addEventListener('click', async e => {
    
    try {
        await axios.get('api/logout');
        window.location.pathname = '/login';
    } catch (error) {
        
    }
    
});
