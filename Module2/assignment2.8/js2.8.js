function concat(strings) {
            let result = '';
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
            }
            return result;
        }

        // Example array of strings
        let stringsArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

        // Call the concat function and store the result
        let concatenatedString = concat(stringsArray);

        // Display the result in the HTML document
        document.getElementById('concatenatedString').textContent = concatenatedString;