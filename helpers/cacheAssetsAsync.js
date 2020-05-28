import { Asset } from 'expo-asset';

async function cacheAssetsAsync(assetsToLoad, callback) {
    // for (const image of assetsToLoad) {
    //   await Asset.fromModule(image).downloadAsync();
    // }

    const loaded = [];
    assetsToLoad.map(item => loaded.push(Asset.fromModule(item).downloadAsync()));

    await Promise.all(loaded).then(() => {
        callback();
    });
}

export default cacheAssetsAsync;