import type { TokenCollection, UserType, TokenType } from './types';
import { type SessionManager } from '../session-managers';

/**
 * Parses a provided JWT token to extract the payload segment of said
 * token.
 * @param token {string}
 * @returns {any}
 */
const getTokenPayload = (token: string): any => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

/**
 * Extracts the payload from the provided idToken and saves the extracted
 * payload to the current session.
 * @param {SessionManager} sessionManager
 * @param {string} idToken
 * @returns {void}
 */
const commitUserToMemoryFromToken = (
  sessionManager: SessionManager,
  idToken: string
): void => {
  const idTokenPayload = getTokenPayload(idToken);
  const user: UserType = {
    family_name: idTokenPayload.family_name,
    given_name: idTokenPayload.given_name,
    picture: idTokenPayload.picture ?? null,
    email: idTokenPayload.email,
    id: idTokenPayload.sub,
  };

  sessionManager.setSessionItem('user', user);
};

/**
 * Saves the provided token and its extracted payload to the current session.
 * @param {SessionManager} sessionManager
 * @param {string} token
 * @param {TokenType} type
 */
export const commitTokenToMemory = (
  sessionManager: SessionManager,
  token: string,
  type: TokenType
): void => {
  const tokenPayload = getTokenPayload(token);
  sessionManager.setSessionItem(type, token);
  if (type === 'access_token') {
    sessionManager.setSessionItem('access_token_payload', tokenPayload);
  } else if (type === 'id_token') {
    sessionManager.setSessionItem('id_token_payload', tokenPayload);
    commitUserToMemoryFromToken(sessionManager, token);
  }
};

/**
 * Saves the access, refresh and id tokens provided in the `TokenCollection`
 * object to the current session.
 * @param {SessionManager} sessionManager
 * @param tokens
 */
export const commitTokensToMemory = (
  sessionManager: SessionManager,
  tokens: TokenCollection
): void => {
  commitTokenToMemory(sessionManager, tokens.refresh_token, 'refresh_token');
  commitTokenToMemory(sessionManager, tokens.access_token, 'access_token');
  commitTokenToMemory(sessionManager, tokens.id_token, 'id_token');
};

/**
 * Extracts the refresh token from current session returns null if the
 * token is not found.
 * @param {SessionManager} sessionManager
 * @returns {string | null}
 */
export const getRefreshToken = (
  sessionManager: SessionManager
): string | null => {
  return sessionManager.getSessionItem('refresh_token') as string | null;
};

/**
 * Extracts the access token from current session returns null if the
 * token is not found.
 * @param {SessionManager} sessionManager
 * @returns {string | null}
 */
export const getAccessToken = (
  sessionManager: SessionManager
): string | null => {
  return sessionManager.getSessionItem('access_token') as string | null;
};

/**
 * Extracts the user information from the current session returns null if
 * the token is not found.
 * @param {SessionManager} sessionManager
 * @returns {string | null}
 */
export const getUserFromMemory = (
  sessionManager: SessionManager
): UserType | null => {
  return sessionManager.getSessionItem('user') as UserType | null;
};

/**
 * Saves the provided user details as `UserType` to the current session.
 * @param {SessionManager} sessionManager
 * @param {UserType} user
 */
export const commitUserToMemory = (
  sessionManager: SessionManager,
  user: UserType
) => {
  sessionManager.setSessionItem('user', user);
};

/**
 * Checks if the provided JWT token is valid (expired or not).
 * @param {string | null} token
 * @returns {boolean} is expired or not
 */
export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;
  const currentUnixTime = Math.floor(Date.now() / 1000);
  const tokenPayload = getTokenPayload(token);
  return currentUnixTime >= tokenPayload.exp;
};
