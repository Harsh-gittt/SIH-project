window.addEventListener('load', () => {

    const riderContainer = document.querySelector('.rider-container');
    const nameContainer = document.querySelector('.website-name-container');
    const mainContentContainer = document.querySelector('.main-content-container');
    

    setTimeout(() => {
        mainContentContainer.style.display = 'none';
        riderContainer.style.display = 'flex';
        nameContainer.style.display = 'flex';
        riderContainer.classList.add('rider-container-animation');
    }, 100);

    setTimeout(() => {
        riderContainer.style.display = 'none';
        // nameContainer.style.display = 'none';
        mainContentContainer.style.display = 'flex';
        mainContentContainer.classList.add('main-content-animation')
    }, 4000);
    
})