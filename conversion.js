function performConversion() 
    {
        const conversionType = document.getElementById("conversionType").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        let result = "";

        if (isNaN(inputValue)) {
            result = "Please enter a valid number.";
        } else {
            switch (conversionType) {
                case "cToF":
                    result = `${inputValue}°C = ${(inputValue * 9 / 5 + 32).toFixed(2)}°F`;
                    break;
                case "fToC":
                    result = `${inputValue}°F = ${((inputValue - 32) * 5 / 9).toFixed(2)}°C`;
                    break;
                case "mToF":
                    result = `${inputValue} meters = ${(inputValue * 3.28084).toFixed(2)} feet`;
                    break;
                case "fToM":
                    result = `${inputValue} feet = ${(inputValue / 3.28084).toFixed(2)} meters`;
                    break;
                default:
                    result = "Invalid conversion type.";
            }
        }

        document.getElementById("result").innerText = result;
    }
