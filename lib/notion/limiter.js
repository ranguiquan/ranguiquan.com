import { RateLimiter } from 'limiter';
import config from '../../site.config';

export function sleep(timeMS) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeMS);
  });
}
// this is a token bucket model to control request frequency.
export class RequestRateLimiter {
  constructor({ maxRequests, maxRequestWindowMS }) {
    this.maxRequests = maxRequests;
    this.maxRequestWindowMS = maxRequestWindowMS;
    this.limiter = new RateLimiter({ tokensPerInterval: config.parallelRequestNumber, interval: 1000 });
  }

  // async acquireToken(fn) {
  //   if (this.limiter.tryRemoveTokens(1)) {
  //     return fn();
  //   } else {
  //     await sleep(this.maxRequestWindowMS);
  //     return this.acquireToken(fn);
  //   }
  // }
  async acquireToken(fn) {
    const remainingRequests = await this.limiter.removeTokens(1);
    return fn();
  }
}
