const addForm = document.querySelector('form');
const countryInput = document.querySelector('input');
const container = document.querySelector('section');



    function putTheThingInTheView(res) {
        container.innerHTML = ''
        nameInput.value = ''

        res.data.forEach((countryName, index) => {
            container.innerHTML += `<p name=${index}>${countryName}</p>`
        })

        document.querySelectorAll('p').forEach(element => {
            const theIndexValue = element.getAttribute('name');

            element.addEventListener('click', () => {
                axios
                    .delete(`/api/country/${theIndexValue}`)
                    .then(res => {
                        putTheThingInTheView(res)
                    })
            })
        })
    };


    function submitCountry (e) {
        evt.preventDefault();

        axios.post('/api/country', {name: countryInput.value})
        .then(res => {
            putTheThingInTheView(res)
        })
        .catch((err) => console.log(err))

    }
