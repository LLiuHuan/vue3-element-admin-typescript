/*
 * @Description: app mutations type
 * @Author: LLiuHuan
 * @Date: 2021-02-17 21:00:14
 * @LastEditTime: 2021-02-17 21:22:55
 * @LastEditors: LLiuHuan
 */

export enum TagsMutationTypes {
  ADD_VISITED_VIEW = 'ADD_VISITED_VIEW',
  ADD_CACHED_VIEW = 'ADD_CACHED_VIEW',
  DEL_VISITED_VIEW = 'DEL_VISITED_VIEW',
  DEL_CACHED_VIEW = 'DEL_CACHED_VIEW',
  DEL_OTHERS_VISITED_VIEWS = 'DEL_OTHERS_VISITED_VIEWS',
  DEL_OTHERS_CACHED_VIEWS = 'DEL_OTHERS_CACHED_VIEWS',
  DEL_ALL_VISITED_VIEWS = 'DEL_ALL_VISITED_VIEWS',
  DEL_ALL_CACHED_VIEWS = 'DEL_ALL_CACHED_VIEWS',
  UPDATE_VISITED_VIEW = 'UPDATE_VISITED_VIEW',
}