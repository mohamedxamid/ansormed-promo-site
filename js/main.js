const modifiers = {
    siteHeaderOpen: 'site-header--open'
}

const elSiteHeader = document.querySelector('.site-header');
const elSitenavToggler = elSiteHeader.querySelector('.site-header__sitenav-toggler');
const elSitenavClose = document.querySelector('.site-header__sitenav-close');

if (elSitenavToggler) {
    elSitenavToggler.addEventListener('click', function () {
        elSiteHeader.classList.add(modifiers.siteHeaderOpen);
    })
}

if (elSitenavClose) {
    elSitenavClose.addEventListener('click', function (evt) {
        evt.preventDefault();

        elSiteHeader.classList.remove(modifiers.siteHeaderOpen)
    })
}