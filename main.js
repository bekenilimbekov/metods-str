// Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим,
//  чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
// Необходимо реализовать такую функцию.

// function bigWords(str){
//     return str.charAt(0).toUpperCase(0) + str.slice(1);
// }
// console.log(bigWords('привет'));

// Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
// Давайте напишем аналогичный метод.
// На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
// Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по
//  символу знака препинания (,.!?:;)/

// function truncateText(text, maxLength) {
//     if (text.length <= maxLength) return text;
    
//     let truncated = text.slice(0, maxLength);
//     let lastSpace = truncated.lastIndexOf(" ");
//     let lastPunctuation = truncated.search(/[,.!?:;]\s*$/);
    
//     if (lastSpace > 0) {
//         truncated = truncated.slice(0, lastSpace);
//     } else if (lastPunctuation > 0) {
//         truncated = truncated.slice(0, lastPunctuation + 1);
//     }
    
//     return truncated + "...";
// }

// // Примеры использования:
// console.log(truncateText("Это пример длинного текста, который нужно обрезать корректно.", 40));
// console.log(truncateText("Короткий текст.", 40));


// Небольшое практическое задание по работе с подстроками.
// Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того,
//  является хотя бы одна из строк (не важно какая) подстрокой другой строки. Если да,
//   то возвращается true. В противном случае - false.

// function isSubstring(str1, str2) {
//     return str1.includes(str2) || str2.includes(str1);
// }

// console.log(isSubstring("hello", "hell")); // true
// console.log(isSubstring("world", "hello")); // false
// console.log(isSubstring("apple", "ple")); // true
// console.log(isSubstring("banana", "orange")); // false
