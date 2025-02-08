import { useThemeStore } from '~/model/themeSlice/themeSlice';
import { useToggleThemeBackground } from '~/hooks/useToggleThemeBackground';

import { Header } from './components/Header/Header';
import { GeneratedColorsPage } from './pages/GeneratedColorsPage/GeneratedColorsPage';

import './App.scss';

function App() {
    const { theme, toggleTheme } = useThemeStore();
    useToggleThemeBackground();

    return (
        <main className="main">
            <Header theme={theme} onToggleTheme={toggleTheme} />
            <GeneratedColorsPage />
        </main>
    );
}

export default App;
