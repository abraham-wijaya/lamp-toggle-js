let arrElement = []
let arrLengt = 10;
let mydiv = document.getElementById("mydiv");

for (let index = 1; index <= arrLengt; index++) {
    let element = `<div class="flex flex-col gap-2 items-center lamp">
            <img src="assets/images/off.gif" alt="" id="lampu${index}" class="lampu${index}" width="250" height="250"/>
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id="default-toggle${index}"
                    class="sr-only peer default-toggle${index}"
                    onchange="saklar()">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>`;
        arrElement.push(element);
}
document.write(arrElement)

let lampu = [];
let toggle = [];
for (let i = 1; i <= arrLengt; i++) {
    lampu[i] = document.getElementById(`lampu${i}`);
    toggle[i] = document.getElementById(`default-toggle${i}`);
}

function saklar(){
    for (let i = 1; i <= arrLengt; i++) {
        lampu[i].src = toggle[i].checked ? "assets/images/on.gif" : "assets/images/off.gif";
    }
}
