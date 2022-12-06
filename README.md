 *  Executing task: npm run test 

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> jest-panic@1.0.0 test
> jest

 FAIL  tests/jest.test.ts
  ● Test suite failed to run

    tests/jest.test.ts:2:1 - error TS2593: Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha` and then add 'jest' or 'mocha' to the types field in your tsconfig.

    2 describe('testing jest', () => {
      ~~~~~~~~
    tests/jest.test.ts:3:2 - error TS2593: Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev 
@types/mocha` and then add 'jest' or 'mocha' to the types field in your tsconfig.

    3  test('0 should result in zero', () => {
       ~~~~
    tests/jest.test.ts:4:3 - error TS2304: Cannot find name 'expect'.

    4   expect(0).toBe(0);
        ~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.82 s
Ran all test suites.

 *  The terminal process "C:\WINDOWS\System32\cmd.exe /d /c npm run test" terminated with exit code: 1. 
 *  Terminal will be reused by tasks, press any key to close it. 

