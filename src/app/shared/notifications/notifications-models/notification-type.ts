export class NotificationType {
  public static readonly toastDanger = new NotificationType('toastDanger');
  public static readonly toastSuccess = new NotificationType('toastSuccess');
  public static readonly toastWarning = new NotificationType('toastWarning');
  public static readonly toastInfo = new NotificationType('toastInfo');

  constructor(private readonly type: string) { }

  public getType() {
    return this.type;
  }

}
