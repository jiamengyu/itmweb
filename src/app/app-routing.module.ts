import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './module/settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './module/profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './module/editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: './module/article/article.module#ArticleModule'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
