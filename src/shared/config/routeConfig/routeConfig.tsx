import { RouteProps } from 'react-router-dom';
import { GenerationPassword } from '../../../pages/GenerationPassword';
// import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { QrKod } from '../../../pages/QrKod';

export enum AppRoutes {
    GENERATION = 'generation',
    // ABOUT = 'about',
    NOT_FOUND = 'not_found',
    QR_KOD = 'qrKod',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.GENERATION]: '/',
    [AppRoutes.QR_KOD]: '/qrkod',
    // [AppRoutes.ABOUT]: '/about',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.GENERATION]: {
        path: RoutePath.generation,
        element: <GenerationPassword />,
    },
    [AppRoutes.QR_KOD]: {
        path: RoutePath.qrKod,
        element: <QrKod />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
