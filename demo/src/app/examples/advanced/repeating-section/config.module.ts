import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, ExamplesRouterViewerComponent } from '../../../shared';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    SharedModule,
    AppModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesRouterViewerComponent,
        data: {
          examples: [{
            title: 'Repeating Section',
            description: `
              <div>
                This demonstrates using
                <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.
              </div>
            `,
            component: AppComponent,
            files: [
              { file: 'app.component.html', content: require('!!prismjs-loader?lang=html!./app.component.html') },
              { file: 'app.component.ts', content: require('!!prismjs-loader?lang=typescript!./app.component.ts') },
              { file: 'app.module.ts', content: require('!!prismjs-loader?lang=typescript!./app.module.ts') },
              { file: 'repeat-section.type.ts', content: require('!!prismjs-loader?lang=typescript!./repeat-section.type.ts') },
            ],
          }],
        },
      },
    ]),
  ],
})
export class ConfigModule { }