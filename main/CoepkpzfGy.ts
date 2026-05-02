function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
function lowercase(input: string): string {
  return input.toLowerCase();
}
function uppercase(input: string): string {
  return input.toUpperCase();
}
function reverseString(input: string): string {
  return input.split('').reverse().join('');
}
function isPalindrome(input: string): boolean {
  const cleaned = input.replace(/\W/g, '').toLowerCase();
  return cleaned === reverseString(cleaned);
}
function wordCount(input: string): number {
  return input.trim().split(/\s+/).length;
}
function truncateString(input: string, length: number): string {
  return input.length > length ? input.substring(0, length) + '...' : input;
}
function repeatString(input: string, times: number): string {
  return input.repeat(times);
}
function replaceAll(input: string, search: string, replacement: string): string {
  return input.split(search).join(replacement);
}
function extractEmails(input: string): string[] {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return input.match(emailPattern) || [];
}
function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}
function combineStrings(...strings: string[]): string {
  return strings.join('');
}
function startsWith(input: string, prefix: string): boolean {
  return input.startsWith(prefix);
}
function endsWith(input: string, suffix: string): boolean {
  return input.endsWith(suffix);
}
function findSubstring(input: string, substring: string): number {
  return input.indexOf(substring);
}
function removeWhitespace(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}
function splitString(input: string, separator: string): string[] {
  return input.split(separator);
}
function isEmpty(input: string): boolean {
  return input.length === 0;
}
function contains(input: string, substring: string): boolean {
  return input.includes(substring);
}
function padString(input: string, length: number, char: string = ' '): string {
  return input.padStart(length, char);
}
function toTitleCase(input: string): string {
  return input.split(' ').map(capitalizeFirstLetter).join(' ');
}
