const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const maxDisplayLength = 30;

const trimmedComment =
    comment.length > maxDisplayLength
        ? comment.substring(0, maxDisplayLength) + "..."
        : comment;

console.log(trimmedComment);
