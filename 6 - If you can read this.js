function to_nato(words) {
  const chars = words.split('');
  const output = [];

  chars.forEach((char) => {
    if (char === ' ') return;
    const match = NATO[char.toUpperCase()];
    output.push(match || char);
  });

  return output.join(' ');
}

console.log(
  to_nato('If you can read') ===
    'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
);
console.log(
  to_nato('Did not see that coming') ===
    'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'
);
console.log(
  to_nato('go for it!') === 'Golf Oscar Foxtrot Oscar Romeo India Tango !'
);
