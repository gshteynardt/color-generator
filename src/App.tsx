import { useThemeStore } from '~/model/themeSlice/themeSlice';
import { useColorTokensStore } from '~/model/colorTokensSlice/colorTokensSlice';
import { useSettingsStore } from '~/model/settingsSlice';
import { useToggleThemeBackground } from '~/hooks/useToggleThemeBackground';

import { GeneratedColorsPage } from './pages/GeneratedColorsPage/GeneratedColorsPage';

import './App.scss';

function App() {
    const { theme, toggleTheme } = useThemeStore();
    const { tokens } = useColorTokensStore();
    const { withText } = useSettingsStore();
    useToggleThemeBackground();

    return (
        <main className="main">
            <GeneratedColorsPage theme={theme} tokens={tokens} withText={withText} onToggleTheme={toggleTheme} />
        </main>
    );
}

export default App;
