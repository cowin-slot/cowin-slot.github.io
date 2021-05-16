function slots(){
    let d = {
    "Ahmednagar": 391,
    "Akola": 364,
    "Amravati": 366,
    "Aurangabad": 397,
    "Beed": 384,
    "Bhandara": 370,
    "Buldhana": 367,
    "Chandrapur": 380,
    "Dhule": 388,
    "district_id": 379,
    "Gondia": 378,
    "Hingoli": 386,
    "Jalgaon": 390,
    "Jalna": 396,
    "Kolhapur": 371,
    "Latur": 383,
    "Mumbai": 395,
    "Nagpur": 365,
    "Nanded": 382,
    "Nandurbar": 387,
    "Nashik": 389,
    "Osmanabad": 381,
    "Palghar": 394,
    "Parbhani": 385,
    "Pune": 363,
    "Raigad": 393,
    "Ratnagiri": 372,
    "Sangli": 373,
    "Satara": 376,
    "Sindhudurg": 374,
    "Solapur": 375,
    "Thane": 392,
    "Wardha": 377,
    "Washim": 369,
    "Yavatmal": 368
    }
    let output = "<h2>Slots</h2>"
    let final_output = []
    let id = d[document.getElementById("city").value]
    let date = new Date()
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${formatted_date}`
    fetch(url) 
    .then((res) => {
        return res.json()
    })
    .then(res => {
        if (res.sessions.length === 0){
            document.getElementById("slots").innerHTML = "<h4>Sorry Server Didn't Provide any Data Regrading this District/City</h4>"
        }
        else{
            res.sessions.forEach((i) => {
                if (i.available_capacity === 0){
                    console.log("0")
                }
                else{
                    final_output.push(i)
                }
            })
            
            if (final_output.length === 0){
                document.getElementById("slots").innerHTML = "<h4>Sorry There are No Slots Available!!</h4>"
            }
            else{
                final_output.forEach((slot) => {
                    output += `
                    <ul>
                        <li>Name: ${slot.name}</li>
                        <li>Address: ${slot.address}</li>
                        <li>from: ${slot.from}</li>
                        <li>to: ${slot.to}</li>
                        <li>Fee Type: ${slot.fee_type}</li>
                        <li>Date: ${slot.date}</li>
                        <li>Available Capacity: ${slot.available_capacity}</li>
                        <li>Minimum Age Limit: ${slot.min_age_limit}</li>
                        <li>Vaccine: ${slot.vaccine}</li>
                        <li>Slots: ${slot.slots}</li>
                    </ul>
                    <br>
                    <br>
                    `
                })
                document.getElementById("slots").innerHTML = output
            }
        }
})
}
