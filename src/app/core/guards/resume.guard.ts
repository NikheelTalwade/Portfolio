import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const resumeGuard: CanActivateFn = () => {
  const router = inject(Router);
  const canAccess = true;
  return canAccess ? true : router.createUrlTree(['/home']);
};
