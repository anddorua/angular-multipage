import { SecondFeatureModule } from './second-feature.module';

describe('SecondFeatureModule', () => {
  let secondFeatureModule: SecondFeatureModule;

  beforeEach(() => {
    secondFeatureModule = new SecondFeatureModule();
  });

  it('should create an instance', () => {
    expect(secondFeatureModule).toBeTruthy();
  });
});
