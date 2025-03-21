import { useThemeStore } from '~/model/themeSlice/themeSlice';
import { useToggleThemeBackground } from '~/hooks/useToggleThemeBackground';

import { GeneratedColorsPage } from './pages/GeneratedColorsPage/GeneratedColorsPage';

import './App.scss';

function App() {
    const { theme, toggleTheme } = useThemeStore();
    useToggleThemeBackground();

    return (
        <main className="main">
            <GeneratedColorsPage theme={theme} onToggleTheme={toggleTheme} />
        </main>
    );
}

export default App;
