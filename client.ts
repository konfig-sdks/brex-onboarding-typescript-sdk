/*
Onboarding API


The onboarding API allows you to refer your customers and personal contacts to Brex.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  ReferralsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { BrexOnboardingCustom } from "./client-custom";

export class BrexOnboarding extends BrexOnboardingCustom {
  readonly referrals: ReferralsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.referrals = new ReferralsApi(configuration);
  }

}