import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BmiCalculatorRoute extends Route {

    @action
    calculateMyBMI(){

        var height = parseInt(document.getElementById('height').value);
        var weight = parseInt(document.getElementById('weight').value);
        var bmi_value = document.getElementById('your_result');

        console.log(height + 'weight ' + weight);

        if(height === '' || isNaN(height))
            bmi_value.innerHTML = "Enter a valid height!";
        else if(weight === '' || isNaN(weight))
            bmi_value.innerHTML = "Enter a valid weight!";
        else{

            var bmi = ( weight / ( ( height * height ) / 10000 ) ).toFixed(2);

            if(bmi < 18.6)
                bmi_value.innerHTML = `Under weight : <span>${bmi}</span>`;
            else if(bmi >= 18.6 && bmi < 24.9)
                bmi_value.innerHTML = `Normal : <span>${bmi}</span>`;
            else
                bmi_value.innerHTML = `Over weight : <span>${bmi}</span>`;

        }

    }
}
