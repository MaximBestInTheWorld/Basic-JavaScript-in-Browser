const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSize.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        fontSize.forEach(e => {
            e.classList.remove('font-size_active');
        });

        element.classList.add('font-size_active');

        const dataSize = element.getAttribute('data-size');

        book.classList.remove('book_fs-small', 'book_fs-big');

        if (dataSize === 'small') {
            book.classList.add('book_fs-small');
        } else if (dataSize === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});