yarn global add expo-cli
yarn add native-base
expo install @expo/webpack-config

cat <<EOF > webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view']
        }
    }, argv);
    return config;
};
EOF

echo "Run 'expo start' to start the application..."