/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, OnDestroy, Input, Output, HostListener, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil, debounceTime, distinctUntilChanged, tap } from "rxjs/operators";

@Directive({
    selector: "input[appDebounce]"
})
export class DebounceDirective implements OnDestroy {
    @Input()
    public debounceTime: number;

    @Output()
    public onEvent: EventEmitter<any>;

    protected emitEvent$: Subject<any>;
    protected subscription$: Subject<void>;

    constructor() {
        this.debounceTime = 500;
        this.onEvent = new EventEmitter<any>();
        this.emitEvent$ = new Subject<any>();
        this.subscription$ = new Subject<void>();
    }

    @HostListener("keyup", ["$event"])
    public onKeyUp(event: any): void {
        event.preventDefault();
        this.emitEvent$.next(event);
    }

    ngOnInit(): void {
        this.emitEvent$
            .pipe(
                takeUntil(this.subscription$),
                debounceTime(this.debounceTime),
                distinctUntilChanged(),
                tap(value => this.emitChange(value))
            )
            .subscribe();
    }

    public emitChange(value: any): void {
        this.onEvent.emit(value);
    }

    ngOnDestroy(): void {
        this.subscription$.next();
        this.subscription$.complete();
    }


}
