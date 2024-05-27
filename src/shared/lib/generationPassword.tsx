export default function generatePasswords(
    length: number,
    useUpperCase: boolean,
    useLowerCase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
): string[] {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '%*)?@#$~';

    let allChars = '';
    if (useUpperCase) allChars += upperCaseChars;
    if (useLowerCase) allChars += lowerCaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;

    if (allChars.length < length) {
        allChars +=lowerCaseChars;
    }

    function getRandomUniqueChars(charSet: string, length: number): string {
        const uniqueChars = new Set<string>();
        while (uniqueChars.size < length) {
            const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
            uniqueChars.add(randomChar);
        }
        return Array.from(uniqueChars).join('');
    }

    const passwords = [];
    for (let i = 0; i < 9; i++) {
        passwords.push(getRandomUniqueChars(allChars, length));
    }
    return passwords;
}
