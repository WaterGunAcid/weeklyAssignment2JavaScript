const prompt = require('prompt-sync')();


//NUMBER 1


// main()

// function main() {
//     let grades = []
//     console.log(selection1())


//Add a grade
// function add() {
//     let addPrompt = Number(prompt("Add the grade (Value must be from 0-100): "))
//     if (addPrompt <= 100 && addPrompt >= 0) {
//         grades.push(addPrompt)
//         console.log("Added the grade.")
//         return (selection1())
//     }
//     else {
//         console.log("Please select a valid number (Must be between 0-100).")
//     }
// }

//     //Remove a grade

// function remove() {
//     let removal = Number(prompt("What grade do you want to remove?: "))
//     for (let i = 0; i < grades.length; i++) {
//         if (removal == grades[i]) {
//             grades.splice(i, 1)
//             console.log("Removed the grade.")
//             return (selection1())
//         }
//         else{
//             console.log("Grade does not exist.")
//         }
//     }
// }

//     //Calculate the average

//     function calculate() {
//         let sum = 0;
//         for (let i = 0; i < grades.length; i++) {
//             sum += grades[i];
//         }
//         return console.log(`${sum/grades.length}`);
//     }

//     //Find the highest grade

//     function highest() {
//         let x = Math.max([grades])
//         console.log(`The highest grade for the student is ${x}`)
//         return (selection1())
//     }

//     //Print all grades

//     function printGrade() {
//         console.log(grades.join("\n"));
//     }



//     //Menu
//     function selection1() {
//         while (true) {
//             let menu = Number(prompt("Student Grade Manager\n\n1. Add Grade\n2. Remove Grade\n3. Calculate Average\n4. Find Highest Grade\n5. Print All Grades\n6. Exit\n\nEnter your choice: "));
//             if (menu == 1) {
//                 add()
//             }
//             else if (menu == 2) {
//                 remove()
//             }
//             else if (menu == 3) {
//                 calculate()
//             }
//             else if (menu == 4) {
//                 highest()
//             }
//             else if (menu == 5) {
//                 printGrade()
//             }
//             else if (menu == 6) {
//                 console.log("Bye.")
//                 break
//             }
//             else {
//                 console.log("Please select a valid option.")
//             }
//         }
//     }
// }




//NUMBER 2


main2()

function main2() {
    let movies = []
    console.log(selection2())


    //Add Movies
    function addMovie() {
        let addPrompt2 = prompt("Add a movie here: ").toLowerCase().trim()
        movies.push(addPrompt2)
        console.log("Added the movie.")
        return (selection2())
    }

    //Remove movies

    function removeMovie() {
        let removeIt = prompt("What movie do you want to remove?: ").toLowerCase().trim()
        for (let i = 0; i < movies.length; i++) {
            if (removeIt == movies[i]) {
                movies.splice(i, 1)
                console.log("Removed the movie.")
                return (selection2())
            }
        }
        console.log("Movie does not exist.")
    }

    //Search a movie

    function searchMovie() {
        let searchIt = prompt("What movie do you want to search for?: ").toLowerCase().trim()
        if(movies.includes(searchIt)){
            console.log("Movie found!")
        }
        else{
            console.log("Movie does not exist on this list.")
        }
        return selection2()
    }

    //Print all movies

    function printMovies() {
        console.log(movies.join("\n"));
    }

    //Count all movies

    function countMovies(){
        console.log("Total movies: " + movies.length)
        return selection2()
    }

    //Convert movie title to uppercase

    function displayMovies(){
        let upperMovie = prompt("What movie do you want in all uppercase? ").toLowerCase().trim()
        let index = movies.indexOf(upperMovie)
        if(index !== -1){
            let upper = ""
            for (let i=0; i<movies[index].length; i++){
                let charcode = movies[index].charCodeAt(i)
                if(charcode>=97 && charcode<=122){
                    upper += String.fromCharCode(charcode - 32)
                }
                else{
                    upper += movies[index][i]
                }
            }
            movies[index] = upper
            console.log("Output:" + movies[index])
        }
        else{
            console.log("Movie does not exist on this list.")
        }
        return selection2()
    }



    function selection2() {
        while (true) {
            let menu = Number(prompt("Movie Collection Manager\n\n1. Add Movie\n2. Remove Movie\n3. Search Movie\n4. Print All Movies\n5. Count Movies\n6. Display Movie in Uppercase\n7. Exit\n\nEnter your choice: "));
            if (menu == 1) {
                addMovie()
            }
            else if (menu == 2) {
                removeMovie()
            }
            else if (menu == 3) {
                searchMovie()
            }
            else if (menu == 4) {
                printMovies()
            }
            else if (menu == 5) {
                countMovies()
            }
            else if (menu == 6) {
                displayMovies()
            }
            else if (menu == 7) {
                console.log("Bye.")
                break
            }
            else {
                console.log("Please select a valid option.")
            }
        }
    }
}