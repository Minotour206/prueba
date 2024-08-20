const body = document.querySelector('body');

export const createNotification = (isError, message) => {
    const div = document.createElement('div');
    div.classList.add('fixed', 'top-20', 'right-0', 'left-0');
    if (isError) {
        div.innerHTML = `
        <div class="max-w-7xl mx-auto flex justify-end">
            <p class="bg-red-700 rounded-lg font-bold p-4 w-3/12">${message}</p>
        </div>
    `
    } else {
        div.innerHTML = `
        <div class="max-w-7xl mx-auto flex justify-end">
            <p class="bg-green-500 rounded-lg font-bold p-4 w-3/12">${message}</p>
        </div>
    `
    }

    body.append(div);
    
};