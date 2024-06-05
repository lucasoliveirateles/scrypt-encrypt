import crypto from 'crypto';

const n = 16384;
const r = 8;
const p = 1;
const keylen = 32;

const password = "mySecurePassword123";
const salt = crypto.randomBytes(16); 

crypto.scrypt(password, salt, keylen, { n, r, p }, (err, derivedKey) => {
  if (err) throw err;
    
  console.log('Salt:', salt.toString('hex'));
  console.log('Derived Key:', derivedKey.toString('hex'));
});
