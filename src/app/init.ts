import {
  CHECK_FOR_AND_RECALL_FOLLOWUPS,
  START_AUTO_FOLLOW_UP_SEQUENCE,
} from "../config/constants";

import AutoFollowUpService from "../services/AutoFollowUp";
import { FollowUpEvent } from "../events/FollowUp";
import { InfoLogger } from "../utils/logger";
import RecallFollowUpService from "../services/RecallFollowUp";
import { executeServiceAtInterval } from "../utils/fns";

const IworkerVocus = {
  startFollowUpsRecallService: () => {
    executeServiceAtInterval(() => {
      InfoLogger(CHECK_FOR_AND_RECALL_FOLLOWUPS);
      FollowUpEvent.emit(CHECK_FOR_AND_RECALL_FOLLOWUPS);
    }, 100 * 60 * 1000);
  },

  startAutoFollowUpService: () => {
    executeServiceAtInterval(() => {
      InfoLogger(START_AUTO_FOLLOW_UP_SEQUENCE);
      FollowUpEvent.emit(START_AUTO_FOLLOW_UP_SEQUENCE);
    }, 15 * 60 * 1000);
  },

  start() {
    AutoFollowUpService();
    this.startAutoFollowUpService();

    RecallFollowUpService();
    this.startFollowUpsRecallService();
  },
};

export default IworkerVocus;
