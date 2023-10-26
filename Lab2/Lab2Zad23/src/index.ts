export async function App() {
    async function handleSubmit(e){
        e.preventDefault();
        const formData = {
            field1: InputOne.value,
            field2: InputTwo.value,
            field3: InputThree.value,
        };
        console.log(formData)
        const res = await fetch('http://localhost:9000/proceed',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formData})
        })
        console.log(res)
        

    };
    const form = document.createElement('form');

    const InputOne = document.createElement('input');
    const InputTwo = document.createElement('input');
    const InputThree = document.createElement('input');

    const Button = document.createElement('button');
    Button.innerHTML = 'Click me';
    Button.onclick = handleSubmit;
    form.appendChild(InputOne);
    form.appendChild(InputTwo);
    form.appendChild(InputThree);
    form.appendChild(Button);

    document.body.appendChild(form);
}

App();
