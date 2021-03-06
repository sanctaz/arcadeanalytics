/*-
 * #%L
 * Arcade Analytics
 * %%
 * Copyright (C) 2018 - 2019 ArcadeAnalytics
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
import { ITEMS_PER_PAGE } from '../../shared';
import { Injectable } from '@angular/core';
import { PaginationConfig } from 'ngx-bootstrap';

@Injectable({ providedIn: 'root' })
export class PaginationConfiguration {
    constructor(private config: PaginationConfig) {
        config.main.boundaryLinks = true;
        config.main.maxSize = 5;
        config.main.itemsPerPage = ITEMS_PER_PAGE;
    }
}
