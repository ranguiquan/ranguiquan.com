import { RateLimiter } from 'limiter';
import config from '../../site.config';

/**
 * Return a Promise solves in timeMS ms.
 * @param {number} timeMS
 * @returns
 */
export function sleep(timeMS) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timeMS);
  });
}
/**
 * Wrapper of a limiter
 */
export class RequestRateLimiter {
  constructor({ maxRequests, maxRequestWindowMS }) {
    this.maxRequests = maxRequests;
    this.maxRequestWindowMS = maxRequestWindowMS;
    this.limiter = new RateLimiter({
      tokensPerInterval: config.parallelRequestLimit,
      interval: 1000,
    });
  }
  /**
   * 
   * @param {()=>{limitedFunction()}} fn 
   * @returns 
   */
  async acquireToken(fn) {
    const remainingRequests = await this.limiter.removeTokens(1);
    return fn();
  }
}
