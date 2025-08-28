import {
  ProfileDangerZone,
  ProfileInformationBlock,
  ProfileNotificationBlock,
  ProfilePlatformBlock,
  ProfileSecurityBlock,
  ProfileSubscriptionBlock,
} from '@/features/profile/profile';

const ProfilPage = () => {
  return (
    <section className="space-y-6 max-w-[885px] mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Profil et paramètres</h1>
        <p className="text-foreground/55">
          Gérez vos informations personnelles et préférences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-6 lg:col-span-2">
          <ProfileInformationBlock />
          <ProfileSecurityBlock />
          <ProfilePlatformBlock />
          <ProfileNotificationBlock />
        </div>

        <div className="space-y-6">
          <ProfileSubscriptionBlock />
          <ProfileDangerZone />
        </div>
      </div>
    </section>
  );
};

export default ProfilPage;
