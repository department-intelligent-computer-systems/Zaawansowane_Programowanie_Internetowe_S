export async function getStaticProps() {
    const res = await fetch("data.json")
        .then(res => res.json())
        .then(data => data.map(item => {
            return {
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
            };
        }));

    console.log(res);

    const table = document.createElement("table");

    const header = table.createTHead();
    const headerRow = header.insertRow();

    for (const key in res[0]) {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    }

    const tableBody = table.createTBody();

    for (const item of res) {
        const row = tableBody.insertRow();
        for (const key in item) {
            const cell = row.insertCell();
            cell.textContent = item[key];
        }
    }

    document.body.appendChild(table);
}

getStaticProps();
