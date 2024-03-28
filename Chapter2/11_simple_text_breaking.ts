namespace SimpleTextBreaking {

function lineBreak(text: string, lineLength: number): string[] {
    let lines: string[] = [];

    while (text.length > lineLength) {
        lines.push(text.substring(0, lineLength));
        text = text.substring(lineLength);
    }

    lines.push(text);
    return lines;
}

console.log(lineBreak("Testing, testing", 5));

console.log(lineBreak("..👮‍♀️", 5));
console.log(lineBreak("...👮‍♀️", 5));
console.log(lineBreak("....👮‍♀️", 5));

}
