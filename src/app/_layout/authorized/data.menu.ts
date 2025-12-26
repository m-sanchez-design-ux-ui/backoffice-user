export class MenuDataService {
  getMenuButtons() {
    return [
      {
        title: 'Inicio',
        link: '/dashboard',
        icon: 'home',
        collapse: false,
      },
      {
        title: 'Configuración',
        link: null,
        icon: 'settings',
        collapse: {
          items: [
            {
              title: 'Gestión de usuarios',
              modal: '',
              link: '/users-admin',
              subCollapse: false,
            },
          ],
        },
      },
    ];
  }
}
