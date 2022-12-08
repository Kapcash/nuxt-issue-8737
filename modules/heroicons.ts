import { NuxtModule } from '@nuxt/schema';
import { addComponent } from '@nuxt/kit';
import * as solid24Icons from '@heroicons/vue/24/solid';
import * as outline24Icons from '@heroicons/vue/24/outline';
import * as solid20Icons from '@heroicons/vue/20/solid';

export default <NuxtModule> function() {
  /**
   * @param iconNames List of component names to be auto-imported
   * @param importPath The import base path to resolve the component
   * @param suffix Optional suffix for exported component. Use it if there's a risk of component names conflicts.
   */
  function addIconAutoImport(iconNames: string[], importPath: string, suffix?: string) {
    for (const name of iconNames) {
      const exportName = `${name}${suffix}`;
      addComponent({
        name: exportName,
        filePath: `${importPath}/${name}`,
        pascalName: exportName,
        mode: 'all',
        prefetch: true,
      });
    }
  }

  addIconAutoImport(Object.keys(outline24Icons), '@heroicons/vue/24/outline', '24Outline');
  addIconAutoImport(Object.keys(solid24Icons), '@heroicons/vue/24/solid', '24Solid');
  addIconAutoImport(Object.keys(solid20Icons), '@heroicons/vue/20/solid', '20Solid');
};
