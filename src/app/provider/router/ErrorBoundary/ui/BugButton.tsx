import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('An error occurred in BugButton component');
        }
    }, [error]);

    return (
        <button
            onClick={() => onThrow()}
        >
            Выкинуть ошибку
        </button>
    );
};
