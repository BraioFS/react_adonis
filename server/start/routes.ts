/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  /*--Content--*/
  Route.get('fetch-contents', 'ContentsController.fetchContents')
  Route.get('find-content-by-id/:id', 'ContentsController.findContentById')
  Route.get('find-content-by-name/:name', 'ContentsController.findContentByName')
  Route.post('save-content', 'ContentsController.saveContent')
  Route.delete('delete-content-by-id/:id', 'ContentsController.deleteContentById')

  /*--Message--*/
  Route.get('fetch-messages', 'MessagesController.fetchMessages')
  Route.get('find-message-by-id/:id', 'MessagesController.findMessageById')
  Route.get('find-message-by-user-id/:id', 'MessagesController.findMessageByUserId')
  Route.post('save-message', 'MessagesController.saveMessage')
  Route.delete('delete-message-by-id/:id', 'MessagesController.deleteMessageById')

  /*--Profile--*/
  Route.get('fetch-profiles', 'ProfilesController.fetchProfiles')
  Route.get('find-profile-by-id/:id', 'ProfilesController.findProfileById')
  Route.get('find-profile-by-name/:name', 'ProfilesController.findProfileByName')
  Route.post('save-profile', 'ProfilesController.saveProfile')
  Route.delete('delete-profile-by-id/:id', 'ProfilesController.deleteProfileById')

  /*--Subject--*/
  Route.get('fetch-subjects', 'SubjectsController.fetchSubjects')
  Route.get('find-subject-by-id/:id', 'SubjectsController.findSubjectById')
  Route.get('find-subject-by-name/:name', 'SubjectsController.findSubjectByName')
  Route.post('save-subject', 'SubjectsController.saveSubject')
  Route.delete('delete-subject-by-id/:id', 'SubjectsController.deleteSubjectById')
  
  /*--Token--*/
   Route.get('fetch-tokens', 'TokensController.fetchTokens')
   Route.get('find-token-by-id/:id', 'TokensController.findTokenById')
   Route.get('find-token-by-name/:name', 'TokensController.findTokenByName')
   Route.post('save-token', 'TokensController.saveToken')
   Route.delete('delete-token-by-id/:id', 'TokensController.deleteTokenById')

  /*--Type--*/
  Route.get('fetch-types', 'TypesController.fetchTypes')
  Route.get('find-type-by-id/:id', 'TypesController.findTypeById')
  Route.get('find-type-by-name/:name', 'TypesController.findTypeByName')
  Route.post('save-type', 'TypesController.saveType')
  Route.delete('delete-type-by-id/:id', 'TypesController.deleteTypeById')

  /*--Url--*/
  Route.get('fetch-urls', 'UrlsController.fetchUrls')
  Route.get('find-url-by-id/:id', 'UrlsController.findUrlById')
  Route.get('find-url-by-name/:name', 'UrlsController.findUrlByName')
  Route.get('find-url-by-type-id/:id', 'UrlsController.findUrlByTypeId')
  Route.post('save-url', 'UrlsController.saveUrl')
  Route.delete('delete-url-by-id/:id', 'UrlsController.deleteUrlById')

  /*--User--*/
  Route.get('fetch-users', 'UsersController.fetchUsers')
  Route.get('find-user-by-id/:id', 'UsersController.findUserById')
  Route.get('find-user-by-name/:name', 'UsersController.findUserByName')
  Route.post('save-user', 'UsersController.saveUser')
  Route.delete('delete-user-by-id/:id', 'UsersController.deleteUserById')

}).prefix('api')