# next-tx-cos-bucket
> Tencent cos bucket for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-tx-cos-bucket
```

## apis
| api     | params | description                  |
| ------- | ------ | ---------------------------- |
| get     | -      | Cos getBucket                |
| put     | -      | Cos putBucket                |
| del     | -      | Cos deleteBucket             |
| head    | -      | Cos headBucket               |
| gets    | -      | List cos buckets             |
| has     | -      | Extend method has bucket     |
| create  | -      | Extend method create bucket  |
| destroy | -      | Extend method destroy bucket |

## usage
```js
import NxTxCosBucket from '@jswork/next-tx-cos-bucket';

// code goes here:
```

## resources
- https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence
- http://bluebirdjs.com/docs/api-reference.html
- https://cloud.tencent.com/document/product/436/36118


## license
Code released under [the MIT license](https://github.com/afeiship/next-tx-cos-bucket/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-tx-cos-bucket
[version-url]: https://npmjs.org/package/@jswork/next-tx-cos-bucket

[license-image]: https://img.shields.io/npm/l/@jswork/next-tx-cos-bucket
[license-url]: https://github.com/afeiship/next-tx-cos-bucket/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-tx-cos-bucket
[size-url]: https://github.com/afeiship/next-tx-cos-bucket/blob/master/dist/next-tx-cos-bucket.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-tx-cos-bucket
[download-url]: https://www.npmjs.com/package/@jswork/next-tx-cos-bucket
